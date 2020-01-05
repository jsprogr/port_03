import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-296ce.firebaseio.com'
})