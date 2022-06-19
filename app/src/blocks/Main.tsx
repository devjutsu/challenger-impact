import { JoinChallenge } from '../components/JoinChallenge';
import { Landing } from '../pages/Landing';
import { HowItsWorking } from '../components/HowItsWorking';

export const Main = () => {
    return (
        <div>
            <div>
                <Landing />
                <JoinChallenge />
                <HowItsWorking />
            </div>

        </div>
    )
}