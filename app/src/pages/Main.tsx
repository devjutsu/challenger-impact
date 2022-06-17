import Info from '@mui/icons-material/Info';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppSelector, useAppDispatch } from '../hooks'
import { ConnectWallet } from '../components/ConnectWallet';

export const Main = () => {
    const dispatch = useAppDispatch();
    
    // const challengeStatus = useAppSelector(challengeStatus);

    return (
        <div>
            <main>
                <MenuIcon />

                <div>
                    <code>Main</code>
                    <ConnectWallet />
                </div>

            </main>
        </div>
    )
}