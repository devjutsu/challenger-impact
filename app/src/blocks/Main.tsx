import Info from '@mui/icons-material/Info';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppSelector, useAppDispatch } from '../hooks'
import { ConnectWallet } from '../components/ConnectWallet';
import { loggedIn } from '../slices/authSlice';

export const Main = () => {
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector(loggedIn);
    
    // const challengeStatus = useAppSelector(challengeStatus);

    return (
        <div>
            <main>
                <MenuIcon />

                <div>
                    <code>Main</code>
                    {!isLoggedIn && <ConnectWallet />}

                    <code>...</code>
                </div>

            </main>
        </div>
    )
}