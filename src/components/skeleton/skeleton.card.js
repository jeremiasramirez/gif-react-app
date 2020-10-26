import  React  from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
 
const Skeletons = () =>{
    return <div >
        <section className="loadingContainer animate" >
            <CircularProgress color="primary"></CircularProgress> 
        </section>

        <section className="containerSkeleton animate">
            <article className="SkeletonCard animateSkeleton"></article>
            <article className="SkeletonCard animateSkeleton"></article>
            <article className="SkeletonCard animateSkeleton"></article>
            <article className="SkeletonCard animateSkeleton"></article>
    </section>
    </div>
}

export default Skeletons;

 