<a name="readme-top"></a>
<!-- README FILE EDITED USING https://stackedit.io/ -->

Contributors
Forks
Issues
Linkedin

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="web/src/assets/logos/vanttec_white.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">HI VANTTEC</h3>

  <p align="center">
    An awesome website page
    <br />
    <a href="/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="/">View Site</a>
    ·
    <a href="https://github.com/vanttec/webpage-vanttec/issues">Report Bug</a>
    ·
    <a href="https://github.com/vanttec/webpage-vanttec/issues">Request Feature</a>
  </p>
</div>



## Table of contents
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#deploy">Deploy</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contributors">Contributors</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

This is the source code used in the Vanttec home page. It has the structure of a monorepo as it combines react-gatsby and sanity.

Here's why:
* /Web - Contain all the pages, components, styles and miscellaneous configs
* /Studio - Contain all the data structure of the content displayed in the website

Some of the page content is static, while some is dynamically generated via sanity.

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![React][React.js]][React-url]
* Yarn
* Gatsby
* Sanity
* Styled components
* Sass
* Chakra
* [![Next][Next.js]][Next-url] (Future implementation)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple example steps.
  ``` git clone https://github.com/vanttec/webpage-vanttec.git  ```
  
### Prerequisites
In order to use this project you must have the following CLI installed

* Yarn
 ```  ```
* Gatsby
 ```  ```
* React
 ```  ```
* Sanity
 ```  ```

> If you are using a mac with a M1 or M2 chip please use the rosetta terminal, refer to the [documentation](https://support.apple.com/en-us/HT211861) to see more.
> If you are looking to use rosetta in four visual studio terminal follow this [steps](https://dev.to/markwitt_me/creating-a-custom-vscode-terminal-profile-for-using-rosetta-on-an-m1-mac-apple-silicon-2gb2).

### Installation
  * To run website
  ``` cd web  ```
  ``` nvm use 17.2 ``` _or higher_
  ``` yarn install  ```
  ``` gatsby clean  ``` _This is optional to clear cache_
  ``` gatsby develop  ``` _or_ ``` gatsby develop -H 0.0.0.0  ```
  * To run sanity
  ``` cd studio  ```
  ``` nvm use 17.2 ``` _or higher_
  ``` yarn install  ```
  ``` sanity start  ```
  
### Deploy
  * To deploy the web
  
  * To deploy sanity to localhost
  ``` sanity graphql deploy  ```
  * To deploy sanity to production
  ``` sanity deploy  ```
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

This website use the following ports
* web
	* View the website here
	``` localhost:8000  ```
	* View the graphql data from sanity here
	``` localhost:8000/__graphql  ```
* sanity
	* View the sanity studio here
	``` localhost:3333  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Add Documentation
- [ ] Language Support
    - [ ] English
    - [ ] Spanish

See the [open issues](https://github.com/vanttec/webpage-vanttec/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this website better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributors
- David Flores - MCC
- 
## License


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Vanttect - email@example.com
Project Link: https://github.com/vanttec/webpage-vanttec/issues

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/