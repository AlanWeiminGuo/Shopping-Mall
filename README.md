# Shopping-Mall

The pages are mainly laid out in css to achieve the corresponding layout and typography, in addition to which the function of hiding the drop-down boxes needs to be implemented.

The design is roughly divided into three parts, the header and middle, and the Docker bar function switch at the bottom. The Docker bar component is handled by the group, and is treated as a separate component, with the corresponding jump settings in the router.

The data on the page needs to be entered, and here I used the data interface for data entry, i.e. first constructing and entering the data on fastmock, then entering the relevant code in the vue part of the code to complete the post instruction, using the post instruction to get this data from the network, and manipulating this data.

Here you need to retrieve the name of the image and then use the foreach loop to add '... /... /assets/' to construct the full address
