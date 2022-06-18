import Info from '@mui/icons-material/Info';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppSelector, useAppDispatch } from '../hooks'
import { ConnectWallet } from '../components/ConnectWallet';
import { loggedIn } from '../slices/authSlice';
import { JoinChallenge } from '../components/JoinChallenge';
import { Landing } from '../pages/Landing';
import { HowItsWorking } from '../components/HowItsWorking';

export const Main = () => {
    const dispatch = useAppDispatch();
    
    
    // const challengeStatus = useAppSelector(challengeStatus);

    return (
        <div>
            <main>
                <MenuIcon />

                <div>
                    <Landing />
                    <JoinChallenge />
                    <HowItsWorking />
                </div>

            </main>
        </div>
    )
}