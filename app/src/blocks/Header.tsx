import MenuBookIcon from '@mui/icons-material/MenuBook';
import Box from '@mui/material/Box';
import { ConnectWallet } from '../components/ConnectWallet';
import { useAppSelector } from '../hooks';
import { loggedIn } from '../slices/authSlice';

export const Header = () => {
    const isLoggedIn = useAppSelector(loggedIn);

    return (<div className="App">
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <MenuBookIcon />

            <Box sx={{ display: 'flex' }}>

                <div>
                    Community
                </div>
                <div>
                    Challenge
                </div>
                <div>
                    Leaderboard
                </div>
                <div>
                    LevelUP
                </div>

                {!isLoggedIn && <ConnectWallet />}

            </Box>





        </header>
    </div>
    )
}