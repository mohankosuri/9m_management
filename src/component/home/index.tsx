import ProductComponent from "./products";
import { Part1 } from "./online-education";
import { Part2 } from "./cards"; 
import { Part3 } from "./onlinelearning"; 
import { Part4 } from "./popularcourses";
import { CourseInstructor } from "./courseinstructor"; 
import { SelfDevelopmentCourse } from "./selfdevelopmentcourse";
import Certification from "./certification";
import { HorizontalScrollText } from "./horizontalscrolltext";
import { NewsandBlogs } from "./newsandblogs";
import { Subscribe } from "./subscribe";
 
 


const HomeComponent = () => {
  return (
    <>
      <div className="m-auto w-auto">    
        
        {/* <ProductComponent /> */}
        <Part1/>
        <Part2/>
        <Part3/>
        <Part4/>
        <CourseInstructor/>
        <SelfDevelopmentCourse/>
        
        <HorizontalScrollText/>
        <NewsandBlogs/>
        <Subscribe/>
        
        
        


      </div>
    </>
  );
};

export default HomeComponent;
