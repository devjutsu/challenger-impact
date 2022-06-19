import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Box } from '@mui/material';
import { ConnectWallet } from '../components/ConnectWallet';
import { CurrentAccount } from '../components/CurrentAccount';
import { useAppSelector } from '../hooks';
import { loggedIn } from '../slices/authSlice';

export const Header = () => {
    const isLoggedIn = useAppSelector(loggedIn);

    return (<div className="App">
        <header className="App-header">

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
                {/* <MenuIcon /> */}
                <Button className="btn">Community</Button>
                <Button className="btn">Challenge</Button>
                <Button className="btn">Leaderboard</Button>
                <Button className="btn">LevelUP</Button>
                {!isLoggedIn ? <ConnectWallet /> : <CurrentAccount />}
            </Box>


        </header>
    </div>
    )
}