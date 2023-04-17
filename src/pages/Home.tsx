import { Avatar, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material"
import { FC } from "react"
import "./Home.css";

const Home: FC = () => {
    const handleLinkedInClick = () => {
        window.open('https://uk.linkedin.com/in/romesh-selvanathan-ab89b85a', '_blank')
    };

    const handleGitHubClick = () => {
        window.open('https://github.com/rselvanathan', '_blank')
    }

    const handleContactClick = () => {
        window.location.href='mailto:romeshselvan@hotmail.co.uk'
    }

    return (
          <div className="home-container">
            <h1>Romesh Selvanathan</h1>
            <div className="avatar">
                <Avatar alt="Romesh" src="./avatar.jpg" sx={{width: 128, height: 128}} />
            </div>
            <p>
              Software Engineer with over 10 years experience building web applications 
            </p>
            <div>
                <Tooltip title="LinkedIn">
                    <IconButton onClick={handleLinkedInClick} color="primary" size="large">
                        <LinkedIn />
                    </IconButton>
                </Tooltip>
                <Tooltip title="GitHub">
                    <IconButton onClick={handleGitHubClick} color="primary" size="large">
                        <GitHub />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Contact">
                    <IconButton onClick={handleContactClick} color="primary" size="large">
                        <Mail />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
      );
};

export default Home;