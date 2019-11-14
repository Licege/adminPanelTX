const Header = {
    display: "flex",
    alignItems: "center",
    height: "60px",
    marginBottom: "20px",
    background: "white",
    borderBottom: "1px solid #E7E7E7"
};

const HeaderTitle = {
    margin: "0 20px",
    fontWeight: "bold",
};

const HeaderAction = {
    margin: "0 30px",
    display: "flex",
    alignItems: "center"
};

const Page = {
    padding: "0 30px 30px"
};

const Card = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    padding: "20px",
    wordWrap: "break-word",
    backgroundColor: "#FFFFFFF",
    backgroundClip: "border-box",
    border: "1px solid rgba(51, 51, 51, 0.125)",
    borderRadius: "0.25rem"
};

const CardBody = {
    flex: "1 1 auto",
    padding: "1.25rem"
};

const styles = {
    Header: Header,
    HeaderTitle: HeaderTitle,
    HeaderAction: HeaderAction,
    Page: Page,
    Card: Card,
    CardBody: CardBody,
};

export default styles
