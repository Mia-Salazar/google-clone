import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

const getImage = () =>
  faker.image.url({ width: 644, height: 362, category: 'animals' });
const getType = () => faker.animal.type();
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();
const getTitle = (type) => `${type} - ${faker.lorem.words(3)}`;

const useGetData = ({ count = 100, delay = 2000, query = '' }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const generateData = () => {
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
  };

  useEffect(() => {
    setIsLoading(true);

    const allData = generateData();
    const formattedQuery = query?.trim().toLowerCase();

    const fetchData = () => {
      const filteredData = allData.filter(
        (item) =>
          item.type.toLowerCase().includes(formattedQuery) ||
          item.title.toLowerCase().includes(formattedQuery)
      );

      setData(filteredData);
      setIsLoading(false);
    };

    const timeout = setTimeout(fetchData, delay);

    return () => clearTimeout(timeout);
  }, [count, query, delay]);

  const getRandomAnimalTypes = (count = 13) => {
    const uniqueAnimals = new Set();

    while (uniqueAnimals.size < count) {
      uniqueAnimals.add(faker.animal.type());
    }

    return Array.from(uniqueAnimals);
  };

  return { data, isLoading, getTypes: getRandomAnimalTypes };
};

export default useGetData;
