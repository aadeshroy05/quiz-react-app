import {useState} from 'react' 

const useQuestions = () => {
    const [question, setQuestion] = useState([]);

    const addQuestion = (option, quest) => {
        const arr = question
        arr.push({
            option,
            quest,
        })
        setQuestion(arr)
        return question;
    }

    return {
        question,
        addQuestion
    }
}

export default useQuestions;