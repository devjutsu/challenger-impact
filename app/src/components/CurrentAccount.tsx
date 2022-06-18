import Blockies from 'react-blockies';
import { currentChain, currentUser, loggedIn } from '../slices/authSlice';
import { useAppSelector } from '../hooks';
import { Container } from '@mui/material';

export const CurrentAccount = () => {
    const loggedInUser = useAppSelector(currentUser);
    const loggedInChain = useAppSelector(currentChain);
    const isLoggedIn = useAppSelector(loggedIn);

    const shortAddress = () => {
        return (loggedInUser == null || loggedInUser.length < 40)
            ? loggedInUser
            : loggedInUser.substring(0, 6) + "..." + loggedInUser.substring(36);
    }

    return (
        <Container>
            {isLoggedIn
                ?
                <>
                    <div className="auth-cell-part">
                        <Blockies seed={loggedInUser ?? ''} />
                    </div>
                    {shortAddress()} on {loggedInChain}
                    
                    

                    {/* <span className="auth-cell-part">
                            </span> */}
                </>
                :
                <>2222</>
            }
        </Container>
    )
}