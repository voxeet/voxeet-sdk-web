window.addEventListener('load', function () {

    addFavicon()

    const missingModels = [
        { 
          name: 'SpatialPosition',
          url: 'modules/models_SpatialAudio.html#SpatialPosition'
        },
        { 
          name: 'SpatialDirection',
          url: 'modules/models_SpatialAudio.html#SpatialDirection'
        },
        { 
          name: 'SpatialScale',
          url: 'modules/models_SpatialAudio.html#SpatialScale'
        },

    ]

    const data = this.window.data
    if(data) {
        const references = [];
        const models = [];
        data.forEach(function(module) {
            if(module.name === 'MediaDeviceServiceInterface' || 
            module.name === 'VideoServiceError') {
                models.push(module)
                return
            }
            if (module.name.indexOf("Service") !== -1  || 
                module.name === 'VoxeetSDK' ) 
            {
                references.push(module)
            } else {
                if(module.id === 0) return
                models.push(module)
            }
        })

        missingModels.forEach(function(model) {
            models.push(model)
        })

        const cleanedReferences = references.sort( function (a, b) {
            return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
        })
        cleanedReferences.unshift(cleanedReferences.pop())

        const hierarchy = {
            WebSDK: [{
                name: 'Overview',
                url: 'index.html'
            }],
            Reference: cleanedReferences,
            Models: models.sort( function (a, b) {
                return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
            }),
        }

        this.window.hierarchy = hierarchy

        generateNav(hierarchy)

        const secondaryNav = document.querySelector('.tsd-navigation.secondary')
        const navTitle = document.createElement('p')
        navTitle.innerText = 'table of contents'
  
        if(secondaryNav) {
            secondaryNav.insertBefore(navTitle, secondaryNav.firstChild)
            const parent = document.querySelector('.row')
            parent.insertBefore(secondaryNav, parent.firstChild)
        }

        function locationHashChanged( e ) {
            generateNav(hierarchy)
        }
        
        window.onhashchange = locationHashChanged;
    }
})

function generateNav(obj) {
    const navigation = document.querySelector('.tsd-navigation.primary ul')
    navigation.innerHTML = ''
    for (let property in obj) {
        const listTitle = document.createElement('li')
        listTitle.classList = 'property-list'
        listTitle.innerText = property
        listTitle.addEventListener('click', function(e) {
            if (e.target == this) {
                const menuChild = this.querySelector("ul")
                if(menuChild){
                    if (menuChild.style.display == "block") {
                        menuChild.style.display = "none";
                    } else {
                        menuChild.style.display = "block";
                    }
                }
            }
        })
        const list = document.createElement('ul')
        list.style.display = 'block'
        if(typeof(obj[property]) === 'object') {
            obj[property].map(function (el) {
                const link = document.createElement('a')
                const listItem = document.createElement('li')
                link.classList = 'property-title'
                link.innerText = el.name
                link.id = el.name
                link.href = generateHref(el.url)

                if(window.document.location.href.indexOf(el.name + '.html') !== -1 || 
                (window.document.location.href.indexOf('index.html') !== -1 && el.name === 'Overview') ||
                (window.document.location.href.indexOf(el.name + '-1.html') !== -1) || 
                (window.document.location.href.indexOf('SpatialAudio.html#' + el.name) !== -1) 
                ) {
                    link.classList.add('selected')

                    setPageTitle(el.name)
                    
                    if(el.name === 'ParticipantInfo' || 
                        el.name === 'AudioProcessingSenderOptions' ||
                        el.name === 'AudioService' ||
                        el.name === 'ParticipantInvited' ||
                        el.name === 'ParticipantPermissions' ||
                        el.name === 'RemoteAudio' || 
                        el.name === 'SubscribeInvitation'
                    ) {
                        const li = document.querySelectorAll('li.tsd-kind-constructor.tsd-parent-kind-class')
                        li.forEach(el => el.remove())
                        document.querySelector('.tsd-panel-group.tsd-member-group ').style.display = 'none'
                    }

                    if(el.name.indexOf('Error') !== -1 ) {
                        const propertiesSection = document.querySelectorAll('.tsd-is-inherited')
                        if(propertiesSection) {
                            propertiesSection.forEach(el => el.remove())
                        }

                    }
                } 
                listItem.classList.add('list-item')
                listItem.appendChild(link)
                list.appendChild(listItem)
            })
            listTitle.appendChild(list)
        }
        navigation.appendChild(listTitle)
    }
}

function generateHref(property) {
    let href = '../' + property
    let splittedUrl = window.location.href.split('/')
    if(window.location.href.indexOf('/index.html') !== -1 || 
       (splittedUrl.length === 5 && splittedUrl[4] === '')
    ) { 
       href = '' + property
    }

    return href
}

function setPageTitle(title) {
    if(title) {
        document.title = `${title} | Web SDK API documentation`
    } else {
        document.title = `Web SDK API documentation`
    }
}

function addFavicon() {
    const link = document.createElement('link');
    const splittedUrl = window.location.href.split('/')
    link.rel = 'icon';
    link.type = 'image/x-icon';

    if(splittedUrl.indexOf('api-references.dolby.io/') !== -1) {
        splittedUrl.splice(4, splittedUrl.length - 4)
        link.href = (splittedUrl + '/assets/favicon.ico').replaceAll(',', '/')
    } else {
        link.href = window.location.href.split('docs/')[0] + 'docs/assets/favicon.ico'
    }
    
    document.getElementsByTagName('head')[0].appendChild(link);
}