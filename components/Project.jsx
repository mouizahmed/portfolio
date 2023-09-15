import Image from 'next/image'
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'

const Project = ({ imagePath, projectLink, title, tags, description }) => {

    return (
        <>
            <Grid item xs={2} sm={1} md={1} lg={1} xl={1} className="group">
                <Link href={projectLink}>
                    <Card className="h-[625px] bg-[#fffff] bg-opacity-20 rounded-xl w-3xl cursor-pointer md:hover:shadow-2xl md:hover:scale-105 transition">
                        <CardContent className="p-0">
                            <Grid container>
                                <Grid item>
                                    <Image src={imagePath} priority alt="/" width='480' height='480' className="align-top" />
                                </Grid>
                                <Grid item>
                                    <h3 className="text-xl pt-5 pl-5">{title}</h3>
                                </Grid>
                                <Grid>
                                    <h3 className="pl-5 pr-5 pb-5">{tags.map((tag, i) => (
                                        <span key={i}>
                                            {tag}
                                            {i < tags.length - 1 && " • "}
                                        </span>
                                    ))}</h3> {/* map with * array */}
                                </Grid>
                                <Grid>
                                    <p className="pl-5 pr-5">{description}</p>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Link>
            </Grid>
        </>
    )

}

export default Project