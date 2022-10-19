import "./AccountActivation.css";
import Sidebar from "../../../components/Sidebar/Sidebar";
import manageRequestIllustration from "../../../assets/manageRequest.png";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUnactivated,
  updateAccountStatus,
  reset,
} from "../../../features/teacher/teacherSlice";
import Button from "@mui/material/Button";
import {
  Fade,
  Modal,
  Box,
  Backdrop,
  Typography,
  Skeleton,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 310,
  background: "#fff",
  color: "#000",
  borderRadius: "15px",
  boxShadow: 20,
  outline: "none",
  p: 4,
  pb: 4,
};

const dataGridstyle = {
  color: "#fff",
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    "& .MuiDataGrid-row": {
      "&:nth-of-type(odd)": {
        backgroundColor: "var(--navyBlue)",
      },
    },
  },
  "& .MuiDataGrid-columnHeaders": {
    //Header Style
    fontSize: 16,
  },
};

const AccountActivation = () => {
  const dispatch = useDispatch();
  const [ID, setID] = useState("");
  const { data, isSuccess, isLoading } = useSelector((state) => state.teacher);
  const [tableData, setTableData] = useState([]);

  const columns = [
    { field: "_id", headerName: "ID", hide: true },
    { field: "email", headerName: "Email", flex: 2 },
    { field: "school", headerName: "School", flex: 2 },
    { field: "fullName", headerName: "Full Name", flex: 2 },
    {
      field: "col4",
      headerName: "",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            onClick={(event) => {
              event.stopPropagation();
              setID(cellValues.row._id);
              handleModal();
            }}
          >
            APPROVE
          </Button>
        );
      },
      flex: 1,
      align: "right",
    },
  ];

  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(!open);
  };

  const setRow = (data) => {
    const table = [];
    data.map((data) => {
      return table.push({
        _id: data._id,
        email: data.email,
        fullName:
          data.userInfo.lastName +
          " " +
          data.userInfo.firstName +
          " " +
          data.userInfo.middleInitial,
        school: data.userInfo.school,
      });
    });

    setTableData(table);
  };

  const updateStatus = () => {
    dispatch(updateAccountStatus(ID));
    setOpen(false);
  };

  useEffect(() => {
    return () => dispatch(getUnactivated());
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      // setTableData(data.teachers);
      setRow(data.teachers);
      dispatch(reset());
    }
    // eslint-disable-next-line
  }, [data, isSuccess]);

  return (
    <div className="account-activation">
      <Sidebar />

      <header>
        <div className="header-text">
          <h1>
            Account <span>Activation</span>
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            metus eu dui ornare laoreet vitae ac nibh. Donec porttitor orci sit
            amet aliquet rutrum. Nunc quis massa a nunc finibus metus eu dui
            ornare laoreet vitae ac nibh. Donec porttitor orci sit amet aliquet
            rutrum. Nunc quis massa a nunc finibus metus eu dui ornare laoreet
            vitae ac nibh. Donec porttitor orci sit amet aliquet rutrum. Nunc
            quis massa a nunc finibus
          </p>
        </div>
        <div className="header-img">
          <img src={manageRequestIllustration} alt="Illustration" />
        </div>
      </header>

      <main>
        <Box
          sx={{
            height: 280,
            width: "100%",
            backgroundColor: "var(--navyBlue)",
          }}
        >
          {!isLoading ? (
            <DataGrid
              getRowId={(tableData) => tableData._id}
              sx={dataGridstyle}
              rows={tableData}
              columns={columns}
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              <Skeleton
                sx={{
                  backgroundColor: "gray",
                }}
                variant="rectangular"
                width={"100%"}
                height={"40px"}
              />
              <Skeleton
                variant="rectangular"
                width="60%"
                sx={{
                  backgroundColor: "gray",
                  marginTop: "20px",
                }}
              />

              <Skeleton
                variant="rectangular"
                width="90%"
                sx={{
                  backgroundColor: "gray",
                  marginTop: "20px",
                }}
              />

              <Skeleton
                variant="rectangular"
                width="85%"
                sx={{
                  backgroundColor: "gray",
                  marginTop: "20px",
                }}
              />

              <Skeleton
                variant="rectangular"
                width="100%"
                sx={{
                  backgroundColor: "gray",
                  marginTop: "20px",
                }}
              />

              <Skeleton
                variant="rectangular"
                width="80%"
                sx={{
                  backgroundColor: "gray",
                  marginTop: "20px",
                }}
              />
            </Box>
          )}
        </Box>
      </main>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Typography
              variant="h5"
              textAlign={"center"}
              fontWeight="600"
              lineHeight={"25px"}
            >
              Are you sure you want to activate this account?
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                marginTop: "1em",
              }}
            >
              <Button
                onClick={updateStatus}
                aria-haspopup="true"
                variant="contained"
                sx={{
                  background: "#42C9A3",
                  marginRight: "10px",
                  height: "35px",
                  width: "90px",
                  ":hover": {
                    bgcolor: "#4283C9",
                    color: "white",
                  },
                }}
              >
                Confirm
              </Button>
              <Button
                onClick={handleModal}
                aria-haspopup="true"
                variant="contained"
                sx={{
                  background: "#42C9A3",
                  marginLeft: "10px",
                  height: "35px",
                  width: "90px",
                  ":hover": {
                    bgcolor: "#4283C9",
                    color: "white",
                  },
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AccountActivation;
