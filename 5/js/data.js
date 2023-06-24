import {getRandomInteger, getRandomArrayElement, createRandomIdFromRangeGenerator} from './util.js';

const NAMES = [
  'Иосиф',
  'Клавдия',
  'Орландо',
  'Ибрагим',
  'Аделаида',
  'Афанасий',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const showDescriptionPhoto = () => {
  const randomPhotoId = createRandomIdFromRangeGenerator(1, 25);
  const randomIndexUrl = createRandomIdFromRangeGenerator(1, 25);
  const randomAvatarIndex = createRandomIdFromRangeGenerator(1, 6);
  const randomCommentId = createRandomIdFromRangeGenerator(0, 10000000);
  let randomMessage = '';
  for (let i = 1; i <= getRandomInteger(1, 2); i++) {
    randomMessage += getRandomArrayElement(MESSAGE);
  }
  return {
    id: randomPhotoId(),
    url: `photos/${randomIndexUrl()}.jpg`,
    description: 'Очень крутое и захватывающее описание',
    likes: getRandomInteger(15, 200),
    comments:{
      id: randomCommentId(),
      avatar: `img/avatar${randomAvatarIndex()}.svg`,
      message: randomMessage,
      name: getRandomArrayElement(NAMES),
    }
  };
};

const photoDescriptions = () => Array.from({length: 25, showDescriptionPhoto});

export {photoDescriptions};
