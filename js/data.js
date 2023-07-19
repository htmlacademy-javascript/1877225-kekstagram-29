import {getRandomInteger, getRandomArrayElement, createRandomIdFromRangeGenerator, createIdGenerator} from './util.js';

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

const generateUniqueUrl = createIdGenerator();
const randomCommentId = createRandomIdFromRangeGenerator(0, 10000000);
const commentCounts = getRandomInteger(0, 30);

const generateCommentMessages = () => {
  const messagesCount = getRandomInteger(1, 2);
  const generateMessageId = createRandomIdFromRangeGenerator(
    0,
    MESSAGE.length - 1
  );
  const commentMessagesIds = Array.from(
    { length: messagesCount },
    generateMessageId
  );
  return commentMessagesIds.map((index) => MESSAGE[index]).join();
};

const createComment = () => {
  const id = randomCommentId();
  const avatarId = getRandomInteger(1, 6);
  return {
    id,
    avatar: `img/avatar-${avatarId}.svg`,
    message: generateCommentMessages(),
    name: getRandomArrayElement(NAMES),
  };
};

const generateComments = () => Array.from({ length: commentCounts }, createComment);

const showDescriptionPhoto = () => {
  const generateUniqueId = createIdGenerator();
  return {
    id: generateUniqueId(),
    url: `photos/${generateUniqueUrl()}.jpg`,
    description: 'Очень крутое и захватывающее описание',
    likes: getRandomInteger(15, 200),
    comments: generateComments(),
  };
};

const photoDescriptions = () => Array.from({length: 25}, showDescriptionPhoto);

export {photoDescriptions, generateComments};
