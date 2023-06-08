import PropTypes from "prop-types";
import { Card, CardHeader, Typography } from "@material-tailwind/react";

export function StepCard({ img, name, description }) {
  return (
    <Card color="transparent" shadow={false} className="text-center">
      <CardHeader className="relative h-56" shadow={false}>
          <img
            alt="Card Image"
            src={img}
            className="h-full w-full"
          />
        </CardHeader>
      <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
        {name}
      </Typography>
      {description && (
        <Typography className="font-normal text-blue-gray-500">
          {description}
        </Typography>
      )}
    </Card>
  );
}

StepCard.defaultProps = {
  description: ""
};

StepCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string
};

StepCard.displayName = "/src/widgets/layout/step-card.jsx";

export default StepCard;
