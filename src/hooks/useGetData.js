import { useMemo } from 'react';
import { faker } from '@faker-js/faker';

const getImage = () =>
  faker.image.url({ width: 644, height: 362, category: 'animals' });
const getType = () => faker.animal.type();
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();
const getTitle = (type) => '';

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
