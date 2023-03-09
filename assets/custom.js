setThemeToBody()

window.addEventListener('load', function () {
    addFavicon()
    addThemeToggle()
    addPageHeading()

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
        { 
            name: 'DeviceChangeResult',
            url: 'modules/models_MediaDevice.html#DeviceChangeResult'
        },
        { 
            name: 'DevicesList',
            url: 'modules/models_MediaDevice.html#DevicesList'
        },
        { 
            name: 'DevicesUpdates',
            url: 'modules/models_MediaDevice.html#DevicesUpdates'
        },
        { 
            name: 'Stats',
            url: 'modules/models_MediaDevice.html#Stats'
        },
        { 
            name: 'WebRTCStats',
            url: 'modules/models_Statistics.html#WebRTCStats'
        },
        { 
            name: 'MediaStreamWithType',
            url: 'modules/models_MediaStream.html#MediaStreamWithType'
        }
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
        const search = document.querySelector('#tsd-search-field')
        search.placeholder = 'Search'

        const searchContainer = document.querySelector('#tsd-search')
        if(!searchContainer.classList.contains('has-focus')) {
            searchContainer.classList.add('has-focus')
        }
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

                if(el.name === 'VoxeetSDK') {
                    removeNamedParameters() 
                }

                if(window.document.location.href.indexOf('MediaDevice.html#' + el.name) !== -1) {
                    const typeDeclarations = document.querySelectorAll('div.tsd-type-declaration')
                    typeDeclarations.forEach(element => element.remove())
                }
               
                if(window.document.location.href.indexOf('.' + el.name + '.html') !== -1 || 
                (window.document.location.href.indexOf('index.html') !== -1 && el.name === 'Overview') ||
                (window.document.location.href.indexOf(el.name + '-1.html') !== -1) || 
                (window.document.location.href.indexOf('SpatialAudio.html#' + el.name) !== -1) || 
                (window.document.location.href.indexOf('MediaDevice.html#' + el.name) !== -1) || 
                (window.document.location.href.indexOf('Statistics.html#' + el.name) !== -1) ||
                (window.document.location.href.indexOf('MediaStream.html#' + el.name) !== -1) 
                ) {
                    link.classList.add('selected')

                    setPageTitle(el.name)
                    
                    if(el.name === 'ParticipantInfo' || 
                        el.name === 'AudioProcessingSenderOptions' ||
                        el.name === 'AudioService' ||
                        el.name === 'ParticipantInvited' ||
                        el.name === 'ParticipantPermissions' ||
                        el.name === 'SubscribeInvitation' ||
                        el.name === 'MediaStreamError'
                    ) {
                        const li = document.querySelectorAll('li.tsd-kind-constructor.tsd-parent-kind-class')
                        li.forEach(el => el.remove())
                        document.querySelector('.tsd-panel-group.tsd-member-group ').style.display = 'none'
                    }

                    if(el.name === 'MediaStreamError' || el.name === 'PeerError' || el.name === 'ServerError') {
                        document.querySelector('.tsd-panel-group.tsd-member-group ').style.display = 'none'
                        const properties = document.querySelector('li.current.tsd-kind-class.tsd-parent-kind-module')
                        properties.childNodes.forEach((p) => {
                            if(p.nodeName === 'UL') {
                                p.remove()
                            }
                        })
                    }

                    if(el.name.includes('MediaDeviceService')) {
                        removeImplementedByHeader()
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
        scrollNavToSelectedItem()
    }
}

function scrollNavToSelectedItem() {
    const navigation = document.querySelector('.tsd-navigation.primary')
    const selectedLink = document.querySelector('a.selected')
    if(selectedLink) {
        const listItemOffsetTop = selectedLink.offsetTop;
        const navHeight = navigation.offsetHeight;
        const listItemHeight = selectedLink.offsetHeight;
        const scrollPosition = listItemOffsetTop - (navHeight / 2) + (listItemHeight / 2);
        navigation.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        })
    }
}

function setThemeToBody(theme) {
    const typedocScript = document.scripts[1]
    typedocScript.remove()
    document.body.classList.forEach(function(value) {
        document.body.classList.remove(value)
    })
    if(theme) {
        document.body.classList.add(theme)
        localStorage.setItem('tsd-custom-theme', theme)
    } else {
        document.body.classList.add(localStorage.getItem('tsd-custom-theme') || 'light')
    }
}

function removeImplementedByHeader() {
    const headers = document.querySelectorAll('h3')
    headers.forEach((header) => {
        if(header.innerText === 'Implements' || header.innerText === 'Implemented by' ) {
            header.parentElement.remove()
        }
    })
}

function removeNamedParameters() {
    const headers = document.querySelectorAll('h5')
    headers.forEach((header) => {
        if(header.textContent.includes('namedParameters')) {
            header.parentElement.remove()
        }
    })
    const signatures = document.querySelectorAll('.tsd-signature.tsd-kind-icon')
    signatures.forEach((signature) => {
        signature.childNodes.forEach((span) => {
            if(span.textContent.includes('namedParameters')) {
                span.nextSibling.nextSibling.remove()
                span.nextSibling.remove()
                span.remove()
            } 
        })
    })
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
        const midContent = document.querySelector('.col-8.col-content')
        if(!midContent.querySelector('h1')) {
            const heading = document.createElement('h1')
            heading.classList.add('mid-heading')
            heading.textContent = title
            midContent.insertBefore(heading, midContent.firstChild)
        }
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



function addThemeToggle() {
    const header = document.querySelector('.tsd-page-toolbar > .container > .table-wrap > #tsd-search')
    const themeToggle = document.createElement('div')
    const lightIcon = document.createElement('button')
    lightIcon.id = 'light'
    lightIcon.classList.add('darkTheme')
    const darkIcon = document.createElement('button')
    darkIcon.id = 'dark'
    darkIcon.classList.add('lightTheme')
    themeToggle.appendChild(lightIcon)
    themeToggle.appendChild(darkIcon)
    header.appendChild(themeToggle)

    lightIcon.addEventListener("click", changeTheme)
    darkIcon.addEventListener("click", changeTheme)
    
    function changeTheme(e) {
        e.target.style.display = "none"
        const buttons = header.querySelectorAll('button')
        buttons.forEach(function(button){ 
            if(button.id != e.target.id) {
                button.style.display = 'block'
            } 
        })
        setThemeToBody(e.target.id)
    }

    if(document.body.className === 'light') {
        lightIcon.style.display = "none"
    } else {
        darkIcon.style.display = "none"
    }
}

function addPageHeading() {
    const header = document.querySelector('.tsd-page-toolbar > .container > .table-wrap > #tsd-search')
    const heading = document.createElement('div')
    heading.classList.add("heading-title")
    heading.textContent = 'Communications SDK for Web'
    header.appendChild(heading)
}