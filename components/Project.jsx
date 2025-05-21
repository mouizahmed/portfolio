import Link from 'next/link'
import Grid from '@mui/material/Grid'

const Project = ({ projectLink, title, tags, description }) => {
    return (
        <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
            <Link href={projectLink}>
                <div className="hover:bg-[#d5d5d1] dark:hover:bg-[#1f2937] p-2 rounded-lg transition-all duration-200">
                    <div className="flex items-center justify-between">
                        <h3>{title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{tags.join(" • ")}</p>
                    <p className="mt-2">{description}</p>
                </div>
            </Link>
        </Grid>
    )
}

export default Project