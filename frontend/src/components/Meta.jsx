import { Helmet } from "react-helmet-async";

const Meta = ({
  pageTitle = "Welcome to BookShop",
  description = "We sell the books for cheap price",
  keywords = "book, best seller, self improvement",
}) => {
  console.log({ pageTitle, description, keywords });

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};



export default Meta;
