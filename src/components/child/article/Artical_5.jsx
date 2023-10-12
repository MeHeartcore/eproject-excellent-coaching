import { Container } from "react-bootstrap"
import "./Artical.css";
import Artical5 from "../../../assets/images/img-blog/These 19 HIIT Workouts Will Make You Forget Boring Cardio.jpg"


import Navigation from "../navigation_bar/Navigation_Bar.jsx"
import Footer from "../footer/Footer.jsx"
function Artical_5() {
    return (
        <div>
					<Navigation/>
            <Container className="artical-all-1">
                <div className="img1">
                    <img className="img1-5" src={Artical5} alt="" />
                </div>
                <div>
                    <h1>These 19 HIIT Workouts Will Make You Forget Boring Cardio</h1>
                </div>
                <div className="artical-text-1">
                    <p >
                        HIGH-INTENSITY INTERVAL TRAINING is the clock-centric protocol that allows you to pack a ton of focused exercise attention into a short amount of time. You might know it better by the shorthand term used by fitness coaches and group training acolytes everywhere: HIIT.
                        <br></br>
                        <br></br>
                        The acronym is as catchy as any in the workout world, and the protocol is as popular as it is effective—if you've taken any group fitness classes in the recent past, there's a good chance you were doing a HIIT routine (or at least, the coach leading the class thought you were doing a HIIT routine. More on that in a moment)
                        <br></br>
                        <br></br>
                        The main appeal of HIIT for many people is that it's an incredibly versatile format that allows for condensed training times. “A lot of people are super busy, and can’t allot an hour in the gym. [HIIT training] is a good way to get a bang for your buck, and spend less time,” says Jahkeen Washington, C.P.T., owner of JTW Fit and the Harlem Kettlebell Club. You don't need close to an hour for an effective HIIT session; even 20 to 30 minutes of focused work can be more than enough for the most well-conditioned exercisers.
                        <br></br>
                        <br></br>
                        HIIT sessions are also highly customizable, making them easy to tailor to your personal schedule and preferred training style. From running and strength training to rowing and boxing, there's a HIIT workout that will work for you. The training protocol is “something that's scalable is easier for people to utilize,” Washington says.
                        <br></br>
                        <br></br>
                        Since there seem to be some many different types of training associated with the term, you might be a bit confused about what HIIT actually is, and why the workouts are so popular. Here's what you need to know about HIIT before you go back to the gym for your next workout.
                        <h3>What Is HIIT?</h3>
                        HIIT stands for "High Intensity Interval Training" (which makes one of the most popular phrases used to describe it, "HIIT training," totally redundant). You shouldn't necessarily think about HIIT as being any one style of exercise, like running or weight lifting. Instead, HIIT is more of a framework, through which trainers can build out different routines depending on the equipment on hand, the experience of the participants, and the amount of time and level of difficulty desired.
                        <br></br>
                        <br></br>
                        One consistent thread through any HIIT program, however, is that workouts are composed of short periods of intense work, then a subsequent period of rest or active recovery. To be most effective, "Intensity" is the most important part of the HIIT equation—participants should be working near or at peak effort during the intervals, then backing off during the breaks. Since this high level of effort can pump up the heart rate, some trainees use HIIT protocols as the cardio component of their exercise routines instead of low intensity steady state training, (LISS) like long runs or cycling.
                        <h3>What's Most Important for HIIT Workouts</h3>
                        Again, HIIT stands for high-intensity interval training, which refers to the short bursts of intense exercise alternated with low-intensity recovery periods that make up the protocol. HIIT is quick and anything but boring, as its exacting work-to-rest ratios make it arguably the most time-efficient way to exercise and burn calories. You can use the HIIT protocol to build your entire workout, or apply it to just a few sets to create super-charged finishers.
                        <br></br>
                        <br></br>
                        However you do it, what makes HIIT work is the intensity. You’re going hard, typically as hard as you can, for a short period of time, then resting for a length of time that’ll let you recover to go hard once again. Work-to-rest ratio is frequently brought in when discussing HIIT, and there are several accepted ratios you should consider.
                        <ul>
                            <li>To improve aerobic fitness: intervals would typically involve a work to rest ratio or 1:1 or 1:2 (i.e. work for 30 seconds, rest for 30 seconds).</li>
                            <li>To train anaerobically (sport-specific training for power and explosiveness): rest intervals are often longer to allow for a more maximal effort, often at least a 1:5 ratio (i.e. work for 15 seconds, rest for 75 seconds).</li>
                        </ul>
                        <h3>The Key to HIIT Workouts</h3>
                        The key to making HIIT work: The intensity. You can’t coast through your work periods when doing HIIT. The protocol is designed to give you chances to go hard, so you need to take advantage of those chances.
                        <br></br>
                        <br></br>
                        That means working hard, but it doesn’t mean going completely 100 percent with your intensity. If you’re completely new to exercise, don't go truly all out all at once. Instead of 15 to 30-second intervals executed at near-100 percent intensity, intervals of one to three minutes at closer to 80 percent of maximum effort, followed by up to five minutes of lower intensity exercise, have also been shown effective for weight loss in sedentary populations.
                        <br></br>
                        <br></br>
                        In group fitness settings (and among far too many trainers) HIIT and "interval training" are often used interchangeably. Make no mistake: True HIIT requires you to be explosive and intense during your work period. Basic interval training, however, minus the high-intensity aspect, is what you see most on the group fitness scene: Work periods here are typically larger than rest periods.
                    </p>
                </div>
								<Footer/>
            </Container>
        </div>
    )
}

export default Artical_5
