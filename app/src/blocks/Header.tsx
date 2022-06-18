import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Button, Box } from '@mui/material';
import { ConnectWallet } from '../components/ConnectWallet';
import { CurrentAccount } from '../components/CurrentAccount';
import { useAppSelector } from '../hooks';
import { loggedIn } from '../slices/authSlice';

export const Header = () => {
    const isLoggedIn = useAppSelector(loggedIn);

    return (<div className="App">
        <header className="App-header">

            <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '1rem' }}>

                <div style={{ margin: '1rem' }}>
                    <Button className="btn">Community</Button>
                </div>
                <div style={{ margin: '1rem' }}>
                    <Button className="btn">Challenge</Button>
                </div>
                <div style={{ margin: '1rem' }}>
                    <Button className="btn">Leaderboard</Button>
                </div>
                <div style={{ margin: '1rem' }}>
                    <Button className="btn">LevelUP</Button>
                </div>

                <div style={{ margin: '1rem' }}>
                    {!isLoggedIn ? <ConnectWallet /> : <CurrentAccount />}
                </div>

            </Box>





        </header>
    </div>
    )
}