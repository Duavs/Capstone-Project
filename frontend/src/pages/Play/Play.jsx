import "./Play.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Carousel from "react-material-ui-carousel";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import playGame_illustration from "../../assets/playGame_illustration.png";
import fingerSpell_illustration from "../../assets/fingerSpell_illustration.png";
import guessTheHandSign_illustration from "../../assets/guessTheHandSign_illustration.png";
import spellHandSign_illustration from "../../assets/spellHandSign_illustration.png";
import fourpics1word_illustration from "../../assets/fourpics1word_illustration.png";

const btnStyle = {
  backgroundColor: "var(--aquaGreen)",
};

const Play = () => {
  const navigate = useNavigate();
  return (
    <div className="play">
      <Sidebar isAdmin="false" />

      <header>
        <Grid2
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid2 xs={6}>
            <h1>
              PLAY A <span>GAME!</span>
            </h1>

            <p style={{ marginTop: "10px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              voluptate maiores molestiae architecto magnam odio unde recusandae
              vel ullam doloremque.
            </p>
          </Grid2>

          <Grid2 xs={6} textAlign="center">
            <img src={playGame_illustration} alt="Play a Game" />
          </Grid2>
        </Grid2>
      </header>

      <main>
        <Carousel
          autoPlay={true}
          interval={4000}
          stopAutoPlayOnHover={true}
          navButtonsAlwaysVisible={false}
          fullHeightHover={true}
          animation="slide"
          height={380}
          indicatorIconButtonProps={{
            style: {
              color: "#f0f0f0",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: "var(--aquaGreen)",
            },
          }}
        >
          {/* Carousel Item 1 */}
          <Paper
            elevation={2}
            sx={{ height: "100%", backgroundColor: "var(--navyBlue)" }}
          >
            <Grid2 container spacing={3} sx={{ height: "100%" }}>
              <Grid2
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={fingerSpell_illustration} alt="Finger Spell" />
              </Grid2>

              <Grid2
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "0 40px",
                }}
              >
                <h2>
                  <span>FINGER SPELL</span> THE WORD
                </h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus vitae fugit aperiam assumenda enim odio tenetur
                  quo provident. Sint voluptates, deserunt inventore magni culpa
                  quas reprehenderit in placeat maiores beatae?
                </p>

                <Button
                  onClick={() => navigate("/finger-spell")}
                  variant="contained"
                  size="large"
                  sx={btnStyle}
                >
                  PLAY
                </Button>
              </Grid2>
            </Grid2>
          </Paper>
          {/* End Carousel Item 1 */}

          {/* Carousel Item 2 */}
          <Paper
            elevation={2}
            sx={{ height: "100%", backgroundColor: "var(--navyBlue)" }}
          >
            <Grid2 container spacing={3} sx={{ height: "100%" }}>
              <Grid2
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={spellHandSign_illustration}
                  alt="Spell the Hand Sign"
                />
              </Grid2>

              <Grid2
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "0 40px",
                }}
              >
                <h2>
                  <span>SPELL THE</span> HAND SIGN
                </h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus vitae fugit aperiam assumenda enim odio tenetur
                  quo provident. Sint voluptates, deserunt inventore magni culpa
                  quas reprehenderit in placeat maiores beatae?
                </p>

                <Button
                  onClick={() => navigate("/spell-hand-sign")}
                  variant="contained"
                  size="large"
                  sx={btnStyle}
                >
                  PLAY
                </Button>
              </Grid2>
            </Grid2>
          </Paper>
          {/* End Carousel Item 2 */}

          {/* Carousel Item 3 */}
          <Paper
            elevation={2}
            sx={{ height: "100%", backgroundColor: "var(--navyBlue)" }}
          >
            <Grid2 container spacing={3} sx={{ height: "100%" }}>
              <Grid2
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={guessTheHandSign_illustration}
                  alt="Guess the Hand Sign"
                />
              </Grid2>

              <Grid2
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "0 40px",
                }}
              >
                <h2>
                  <span>GUESS THE</span> HAND SIGN
                </h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus vitae fugit aperiam assumenda enim odio tenetur
                  quo provident. Sint voluptates, deserunt inventore magni culpa
                  quas reprehenderit in placeat maiores beatae?
                </p>

                <Button
                  onClick={() => navigate("/guess-hand-sign")}
                  variant="contained"
                  size="large"
                  sx={btnStyle}
                >
                  PLAY
                </Button>
              </Grid2>
            </Grid2>
          </Paper>
          {/* End Carousel Item 3 */}

          {/* Carousel Item 4 */}
          <Paper
            elevation={2}
            sx={{ height: "100%", backgroundColor: "var(--navyBlue)" }}
          >
            <Grid2 container spacing={3} sx={{ height: "100%" }}>
              <Grid2
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={fourpics1word_illustration} alt="4 Pic 1 Word" />
              </Grid2>

              <Grid2
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "0 40px",
                }}
              >
                <h2>
                  <span>4 PIC</span> 1 WORD
                </h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus vitae fugit aperiam assumenda enim odio tenetur
                  quo provident. Sint voluptates, deserunt inventore magni culpa
                  quas reprehenderit in placeat maiores beatae?
                </p>

                <Button
                  onClick={() => navigate("/4-pics-1-word")}
                  variant="contained"
                  size="large"
                  sx={btnStyle}
                >
                  PLAY
                </Button>
              </Grid2>
            </Grid2>
          </Paper>
          {/* End Carousel Item 4 */}
        </Carousel>
      </main>
    </div>
  );
};

export default Play;
