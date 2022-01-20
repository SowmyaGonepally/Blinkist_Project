import { render,screen } from "@testing-library/react"
import ExploreBooks from "../ExploreBooks"

test("THe girl image should be rendered",()=>{

    render(

        <ExploreBooks />
   );

   const image=screen.getByRole("img");
   expect(image).toHaveAttribute("src","girl.png");
    
})