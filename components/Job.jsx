import Image from 'next/image'
import Grid from '@mui/material/Grid'

const Job = ({ logoPath, companyName, position, timeline }) => {

    return (
        <>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className="flex justify-center items-center">
                <Image src={logoPath} alt="/" width='30' height='30' className="rounded-xl" />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="flex justify-start">
                <Grid container columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} >
                        <h3>{companyName}</h3>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                        <p>{position}</p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2} sx={{ textAlign: "right" }}>
                <h3>{timeline}</h3>
            </Grid>
        </>
    )

}

export default Job