import { useMemo } from 'react';
import { faker } from '@faker-js/faker';

const getImage = () =>
  faker.image.url({ width: 644, height: 362, category: 'animals' });
const getType = () =>
  faker.helpers.arrayElement([
    'bear',
    'bird',
    'cat',
    'cow',
    'crocodilia',
    'dog',
    'fish',
    'horse',
    'lion',
    'rabbit',
    'snake',
  ]);
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();
const getTitle = (type) =>
  faker.animal[type] ? faker.animal[type]() : 'Unknown Animal';

const useGetData = (count = 100) => {
  const data = useMemo(() => {
    return [...new Array(count)].map((_, index) => {
      const type = getType();

      return {
        type,
        id: index + 1,
        url: getUrl(),
        title: getTitle(type),
        description: getText(),
        image: getImage(),
      };
    });
  }, [count]);

  return data;
};

export default useGetData;
