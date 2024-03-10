import { useRef } from "react";
import "./whatwegive.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

const items = [
  {
    id: 1,
    title: "Drive when you want, make what you need",
    img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1116,h_1116/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png",
    desc: "Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.",
  },
  {
    id: 2,
    title: "The Uber you know, reimagined for business",
    img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1116,h_1116/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png",
    desc: "Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.",
  },
  {
    id: 3,
    title: "Make money by renting out your car",
    img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1116,h_1116/v1696243819/assets/18/34e6fd-33e3-4c95-ad7a-f484a8c812d7/original/fleet-management.jpg",
    desc: "Connect with thousands of drivers and earn more per week with Uber's free fleet management tools.",
  },
  {
    id:4,
    title:"Do whatever you like",
    img:"https://images.pexels.com/photos/10082741/pexels-photo-10082741.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=2",
    desc:"This is cloned website so dont get fooled"
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]);
  const [underline,setUnderline]=useState(false)
  return (
    <section ref={ref}>
      <motion.div className="container" style={{ margin: "auto" }}>
        <div className="wrapper">
          <div className="imgcontainer">
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textcontainer" style={{ y }}>
            <h2 className="text-[10px] ">{item.title}</h2>
            <p>{item.desc}</p>
            <button className="butto">
              <button className="first">Get started</button>
              <button className="second" >
                Already have an account?Sign in
              </button>
              {/* <div className="under" style={{height:"2px",backgroundColor:"green",}}></div> */}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
const Whatwegive = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <motion.div className="portfolio " ref={ref} style={{backgroundColor:"white"}}>
      <div className="progress">
        <h1 className="">Featured Works</h1>
        <motion.div className="progressbar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </motion.div>
  );
};

export default Whatwegive;
