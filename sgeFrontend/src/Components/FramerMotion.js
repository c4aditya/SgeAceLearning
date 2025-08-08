  // motion animation starts
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  // NEW bottom animation
  const bottomVariants = {
    hidden: { opacity: 0, y: 100 }, // y means vertical movement, positive y = bottom
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  export default  {leftVariants , rightVariants , bottomVariants}