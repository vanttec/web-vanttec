import * as React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';

export const AppContext = React.createContext(null);
export const Consumer = AppContext.Consumer;

export function MyContext(props) {

  //? SANITY DATA
    // const data = useStaticQuery(graphql`
    //   query {
    //     allSite {
    //       nodes {
    //         id
    //       }
    //     }
    //   }
    // `);

  //? CONTEXTS
    //^ Handle selected events to suscribe in the form
    const [dataExample, setDataExample] = React.useState({})

    const dataFunctionExample = (example) => {
      setDataExample(example)
    }

  return (
    <AppContext.Provider value={{
      dataExample: dataExample,
      actions: {
        dataFunctionExample: dataFunctionExample,
      }
    }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default MyContext