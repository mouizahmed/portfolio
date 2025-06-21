import Image from 'next/image'
import Grid from '@mui/material/Grid'

const Job = ({ logoPath, companyName, position, timeline }) => {

    return (
        <>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className="flex justify-center items-center">
                <Image src={logoPath} alt="/" width='30' height='30' className="rounded-xl" />
            </Grid>
            <Grid item xs={5} sm={5} md={5} lg={5} xl={5} className="flex justify-start">
                <Grid container columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} >
                        <p className="font-semibold">{companyName}</p>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                        <p>{position}</p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={{ textAlign: "right" }}>
                <p>{timeline}</p>
            </Grid>
        </>
    )

}

export default Job