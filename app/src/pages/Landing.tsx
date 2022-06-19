import { REACT_APP_API, REACT_APP_CONTRACT } from "../config"

export const Landing = () => {
    return (<div>
        <div>Landing...</div>
        <div>{REACT_APP_CONTRACT ?? 'HZ'}</div>
        <div>{REACT_APP_API ?? 'hz'}</div>

    </div>)
}