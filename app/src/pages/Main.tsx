import Info from '@mui/icons-material/Info';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppSelector, useAppDispatch } from '../hooks'

export const Main = () => {
    const dispatch = useAppDispatch();
    // const challengeStatus = useAppSelector(challengeStatus);

    return (
        <div>
            <main>
                <MenuIcon />

                <div>
                    <code>Main</code>
                </div>

            </main>
        </div>
    )
}