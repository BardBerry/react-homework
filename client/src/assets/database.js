import { v4 as uuidv4 } from 'uuid';

export const database = {
  tagsArray: ['violet', 'green', 'red', 'orange', 'blue', 'light_green', 'dark_blue', 'yellow'],
  todo: [
    {
      id: uuidv4(),
      text: 'Нарисовать иллюстрации',
      description: 'Очень длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание',
      tagsArray: ['violet', 'green', 'red', 'orange', 'blue', 'light_green', 'dark_blue', 'yellow'],
      comments: [
        {
          author: 'Иван Иванов',
          text: 'Очень длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий',
        },
        {
          author: 'Иван Иванов',
          text: 'Очень длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий',
        },
        {
          author: 'Иван Иванов',
          text: 'Очень длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий',
        },
      ]
    },
    {
      id: uuidv4(),
      text: 'Сверстать лендинг по готовому шаблону',
      description: 'Очень длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание',
      tagsArray: ['violet', 'green', 'red'],
      comments: [
        {
          author: 'Иван Иванов',
          text: 'Очень длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий',
        },
      ]
    },
    {
      id: uuidv4(),
      text: 'Нарисовать иллюстрации',
      description: 'Очень длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание',
      tagsArray: ['violet', 'green', 'red', 'orange', 'blue', 'light_green', 'dark_blue', 'yellow'],
      comments: [
        {
          author: 'Иван Иванов',
          text: 'Очень длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий',
        },
        {
          author: 'Иван Иванов',
          text: 'Очень длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий',
        },
        {
          author: 'Иван Иванов',
          text: 'Очень длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий',
        },
      ]
    },
    {
      id: uuidv4(),
      text: 'Сверстать лендинг по готовому шаблону',
      description: 'Очень длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание',
      tagsArray: ['violet', 'green', 'red'],
      comments: [
        {
          author: 'Иван Иванов',
          text: 'Очень длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий',
        },
      ]
    },
  ],
  progress: [
    {
      id: uuidv4(),
      text: 'Нарисовать иллюстрации',
      description: 'Очень длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание',
      tagsArray: ['violet', 'green', 'red', 'orange', 'blue', 'light_green', 'dark_blue', 'yellow'],
      comments: [
        {
          author: 'Иван Иванов',
          text: 'Очень длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий',
        },
        {
          author: 'Иван Иванов',
          text: 'Очень длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий',
        },
        {
          author: 'Иван Иванов',
          text: 'Очень длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий',
        },
      ]
    },
    {
      id: uuidv4(),
      text: 'Сверстать лендинг по готовому шаблону',
      description: 'Очень длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание',
      tagsArray: ['violet', 'green', 'red'],
      comments: [
        {
          author: 'Иван Иванов',
          text: 'Очень длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий',
        },
      ]
    },
  ],
  done: [
    {
      id: uuidv4(),
      text: 'Сверстать лендинг по готовому шаблону',
      description: 'Очень длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание длинное описание',
      tagsArray: ['violet', 'green', 'red'],
      comments: [
        {
          author: 'Иван Иванов',
          text: 'Очень длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий длинный комментарий',
        },
      ]
    },
  ]
}