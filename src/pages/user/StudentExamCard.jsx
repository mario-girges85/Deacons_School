import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import quizimg from "../../assets/images/quiz.jpg";
import Swal from "sweetalert2";
const authenticationerror = () => {
  Swal.fire({
    title: "Authentication Error ",
    text: "you can enroll this exam only in the Hall ",
    icon: "error",
  });
};
const CardDefault = () => {
  return (
    <Card className="mt-4 w-72">
      {" "}
      {/* Reduced width */}
      <CardHeader color="blue-gray" className="relative h-40">
        {" "}
        {/* Reduced height */}
        <img
          src={quizimg}
          alt="card-image"
          className="h-full w-full object-cover" // Ensures the image scales properly
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          {" "}
          {/* Adjusted to h6 */}
          2nd level 1st year (211)
        </Typography>
        <Typography className="text-sm">
          {" "}
          {/* Smaller text */}
          al7an
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          onClick={() => {
            authenticationerror();
          }}
          size="sm"
          className="bg-cdarkred-100"
        >
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardDefault;
