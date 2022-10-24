import "./Login.css";
import back from "../../assets/back.png";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, login } from "../../features/auth/authSlice";
import {
  FormControl,
  FormControlLabel,
  TextField,
  Switch,
  Fade,
  Modal,
  Box,
  Backdrop,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import ChooseRole from "../../components/ChooseRole/ChooseRole";
import { toast } from "react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  background: "#fff",
  borderRadius: "15px",
  boxShadow: 20,
  outline: "none",
  p: 4,
  pb: 6,
};

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const Login = () => {
  const [open, setOpen] = useState(true);

  const handleModal = () => {
    if (!isLoading) {
      setOpen(!open);
    }
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [choosenRole, setChoosenRole] = useState(null);

  const toastID = useRef(null);

  const notify = () =>
    (toastID.current = toast.loading("Logging in...", {
      autoClose: 15000,
      position: "top-right",
    }));

  const setRole = (role) => {
    setChoosenRole(role);
    handleModal();
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setChoosenRole("");
  };

  useEffect(() => {
    if (isSuccess) {
      clearInputs();
      dispatch(reset());
      toast.update(toastID.current, {
        render: "Login Successfully",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      if (user.role === "teacher") {
        navigate("/teacher-dashboard");
      } else if (user.role === "student") {
        navigate("/student-dashboard");
      } else {
        navigate("/asl-translator");
      }
    }

    if (isError) {
      toast.update(toastID.current, {
        render: message,
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
      dispatch(reset());
    }
    // eslint-disable-next-line
  }, [user, isLoading, isError, isSuccess, message]);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      role: choosenRole,
    };
    notify();
    dispatch(login(userData));
  };

  return (
    <div className="user-login">
      <div
        className="back_home"
        onClick={() => {
          navigate("/");
        }}
      >
        <ReplyAllIcon
          sx={{
            fontSize: "50px",
            "&:hover": {
              color: "#182142",
            },
          }}
        />
      </div>
      <div className="container">
        <h1>
          Log<span>i</span>n
          <img
            src={back}
            alt="Back"
            onClick={() => {
              handleModal();
            }}
          />
        </h1>

        <span>Enter your credentials to login</span>

        <form>
          <FormControl fullWidth={true}>
            <TextField
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              sx={{ mt: 2 }}
              InputProps={{ sx: { height: 50 } }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <TextField
              label="Password"
              type={passwordShown ? "text" : "password"}
              name="password"
              autoComplete="password"
              sx={{ my: 2 }}
              InputProps={{ sx: { height: 50 } }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <FormControlLabel
              control={
                <Android12Switch
                  sx={{ ml: 0.5 }}
                  onChange={() => {
                    setPasswordShown(!passwordShown);
                  }}
                />
              }
              label="Show Password"
            />

            <LoadingButton
              onClick={submit}
              loading={isLoading}
              loadingIndicator={
                <CircularProgress size="2em" sx={{ color: "#182240" }} />
              }
              variant="contained"
              sx={{
                background: "#42C9A3",
                height: 50,
                borderRadius: "10px",
                mt: 2,
                ":hover": {
                  bgcolor: "#182240",
                  color: "white",
                },
              }}
            >
              Login
            </LoadingButton>
          </FormControl>
        </form>
        <span className="forgetPassword">Forgot password?</span>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        // onClose={handleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <ChooseRole onChange={handleModal} setRole={setRole} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Login;
