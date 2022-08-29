import { Button } from '@material-ui/core'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Result.css'
const navigate = useNavigate
const Result = ({ name, score }) => {
    useEffect(() => {
        if (!name) {
            navigate('/')
        }
    }, [name])

    return (
        <div className="result">
            <span className="title">Final Score: {score}/10</span>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ alignSelf: 'center', marginTop: 20 }}
                href="/"
            >
                Go to homepage
            </Button>
        </div>
        // <Button>

        // </Button>
    )
}

export default Result
