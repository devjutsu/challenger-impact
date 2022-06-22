import { Grid } from "@mui/material"

export const HowItsWorking = () => {
    return (<div className='App-howitsworking'>
        <div style={{margin:'1rem'}}><code>How it is working...</code></div>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className='Howitsworking-block' style={{ backgroundColor: 'lime', opacity: '.4' }}>
                    Login with your MetaMask
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className='Howitsworking-block' style={{ backgroundColor: 'magenta', opacity: '.5' }}>
                    Accept the Game
                </div>
            </Grid>
            <Grid item xs={4}>
                <div className='Howitsworking-block' style={{ backgroundColor: 'darkcyan', opacity: '.7' }}>
                    Submit your results
                </div>
            </Grid>
            <Grid item xs={4}>
                <div className='Howitsworking-block' style={{ backgroundColor: 'orangered', opacity: '.4' }}>
                    ...
                </div>
            </Grid>
            <Grid item xs={4}>
                <div className='Howitsworking-block' style={{ backgroundColor: 'royalblue', opacity: '.4' }}>
                    Profit!
                </div>
            </Grid>
        </Grid>
    </div>)
}