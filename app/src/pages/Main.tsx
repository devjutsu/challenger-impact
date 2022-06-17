import Info from '@mui/icons-material/Info';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

export const Main = () => {
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}

                <MenuIcon />

                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}