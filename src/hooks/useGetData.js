import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

const getImage = () =>
  faker.image.url({ width: 644, height: 362, category: 'animals' });
const getType = () => faker.animal.type();
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();
const getTitle = (type) => `${type} - ${faker.lorem.words(3)}`;

const useGetData = (count = 100, delay = 2000) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = () => {
      const newData = [...new Array(count)].map((_, index) => {
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

      setData(newData);
      setLoading(false);
    };

    const timeout = setTimeout(fetchData, delay);

    return () => clearTimeout(timeout);
  }, [count, delay]);

  return { data, loading };
};

export default useGetData;
