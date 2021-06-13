import React from "react";
import "./About.css";
import ReactPlayer from "react-player";

function About(props) {
  return (
    <div className="about__container">
      <span>
        “We are marching in a compact group along a precipitous and difficult path, firmly holding each other by the hand. We are surrounded on all sides by enemies, and we have to advance almost constantly under their fire. We have combined, by a freely adopted decision, for the purpose of fighting the enemy, and not of retreating into the neighbouring marsh, the inhabitants of which, from the very outset, have reproached us with having separated ourselves into an exclusive group and with having chosen the path of struggle instead of the path of conciliation. And now some among us begin to cry out: Let us go into the marsh! And when we begin to shame them, they retort: What backward people you are! Are you not ashamed to deny us the liberty to invite you to take a better road! Oh, yes, gentlemen! You are free not only to invite us, but to go yourselves wherever you will, even into the marsh. In fact, we think that the marsh is your proper place, and we are prepared to render you every assistance to get there. Only let go of our hands, don’t clutch at us and don’t besmirch the grand word freedom, for we too are “free” to go where we please, free to fight not only against the marsh, but also against those who are turning towards the marsh!”
      </span>
      <span>Lenin, What Is To Be Done?, “Dogmatism And ‘Freedom of Criticism’” (1901)</span>
      <div className="anthem">
        <ReactPlayer url='https://www.youtube.com/watch?v=U06jlgpMtQs'  playing controls loop width="0px" height="0px"/>
      </div>
    </div>
  );
}

export default About;