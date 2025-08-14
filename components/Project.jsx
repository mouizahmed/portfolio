import Link from 'next/link'
import Grid from '@mui/material/Grid'
import { FiArrowUpRight } from 'react-icons/fi'

const Project = ({ projectLink, projectName, projectSubtitle, tags, description }) => {
    return (
        <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
            <div className="transition-all duration-200 rounded-lg">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-semibold">{projectName}</p>
                        {projectSubtitle && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{projectSubtitle}</p>
                        )}
                    </div>
                </div>
                <p className="text-sm italic text-gray-500 dark:text-gray-500 mt-2">{tags.join(" / ")}</p>
                <p className="mt-2">{description}</p>
                <Link href={projectLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                    <div className="flex items-center text-sm mt-2 text-blue-500 dark:text-blue-400">
                        <FiArrowUpRight className="w-4 h-4" />
                        <p className="ml-1">github</p>
                    </div>
                </Link>
            </div>
        </Grid>
    )
}

export default Project