# Image-Retrieval

### Hi guys! Please, take a look. 

### This project:
1. Uses Unsplash.com to retrieve images from API.
2. Has a basic image search functionality. 
3. Display results in GRID layout. 
4. Remembers previosu search queries in local storage ( no duplicates ) 
5. Suggests lasts 5 search queries in the search input as an autocomplete dropdown. 

I have also tried to implement this project by using query list instead of local storage, so you can see an example here: https://staniulis.eu/image-retrieval/


# In process: 

I can do an Authentification by using Auth0, but with Unsplash Authentification I encountered a problem: 

When I get an authentification code it should redirect me to the page, where then I could do various tasks ( liking and disliking ), that need a private access, unfortunately I got stuck here: 

  unsplash.authconst\
    .userAuthentication() ---> need to figure out how to take an authentification code from URL here. \
    .then(toJson)\
    .then((json) => {\
      unsplash.auth.setBearerToken(json.access_token);\
    });
   


