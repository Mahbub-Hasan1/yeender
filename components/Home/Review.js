import Avatar from '@material-ui/core/Avatar';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    'https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/12440961457404847551/300x250_1.png',
    'https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/12440961457404847551/300x250_1.png',
    'https://tpc.googlesyndication.com/sadbundle/$csp%3Der3$/12440961457404847551/300x250_1.png',
];

const reviewData = [
    {
        id: 1,
        name: 'Mahbub-Hasan',
        email: 'mahbub.hasan9000@gmail.com',
        img: 'https://cdn.pixabay.com/photo/2016/03/09/10/23/model-1246028__340.jpg',
        Description:
            'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.',
    },
    {
        id: 1,
        name: 'Mahbub-Hasan',
        email: 'mahbub.hasan9000@gmail.com',
        img: 'https://cdn.pixabay.com/photo/2016/03/09/10/23/model-1246028__340.jpg',
        Description:
            'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.',
    },
    {
        id: 1,
        name: 'Mahbub-Hasan',
        email: 'mahbub.hasan9000@gmail.com',
        img: 'https://cdn.pixabay.com/photo/2016/03/09/10/23/model-1246028__340.jpg',
        Description:
            'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.',
    },
    {
        id: 1,
        name: 'Mahbub-Hasan',
        email: 'mahbub.hasan9000@gmail.com',
        img: 'https://cdn.pixabay.com/photo/2016/03/09/10/23/model-1246028__340.jpg',
        Description:
            'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.',
    },
];


const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
};

const Review = () => {

    return (
        <section className="review-area">
            <h5 className="text-center">TESTIMONIALS</h5>
            <h3 className="text-center review-title m-3">Don’t Believe Us, Check What People Says</h3>
            <div className="container-xl">
                <Slide {...properties}>
                    <div className="each-slide d-flex row m-10">
                        <div className="col">
                            <div className="card p-5">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAYAAADXYyzPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTM0QUIyOEU2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTM0QUIyOEQ2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTJkODk5MC1hNDA3LTk1NDctYTI0NC02Yjg0YTBlNDhjZjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZGY0YWRjYTUtODJmMy1hOTQ4LThlZGQtNjRhZWEwZjFiOTNkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9EYFmwAAANBJREFUeNpiZEADoqKiLkCqnAETvH/9+nUYuuD///8xFIqJiYH0u2Ax496rV6/SQQwWLJK4NFUwEAGAlgpCzRDEIp0OYzBh8S02S98D8SwG4kAaDktBvp2F1WIcQQwCncBgfk+Cb7GagcxhGgjfovuYbr6FW0xv3yL7mK6+BWcnoG+NcfgW7FpoaKCDs2gOwuVbkJp7QIdhmMGCQwMMrMIh7grEe4gIfpDZu7FJMDEMEBi1eNTiUYtHLR56FoPK6rPQspcUcBaNvxqLGF4AEGAAgyhF43Oqjh8AAAAASUVORK5CYII="
                                            alt=""
                                        />
                                        <p>
                                            Add rice and stir very gently to distribute. Top with
                                            artichokes and peppers, and cook without stirring, until
                                            most of the liquid is absorbed, 15 to 18 minutes. Reduce
                                            heat to medium-low, add reserved shrimp and mussels,
                                            tucking them down into the rice, and cook again without
                                            stirring, until mussels have opened and rice is just
                                            tender, 5 to 7 minutes more. (Discard any mussels that
                                            don’t open.
                                        </p>
                                        <h5>--Mahbub-Hasan</h5>
                                    </div>
                                    <div className="col-sm-3">
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://i.imgur.com/Xcnejze.jpg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide d-flex row m-10">
                        <div className="col">
                            <div className="card p-5">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAYAAADXYyzPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTM0QUIyOEU2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTM0QUIyOEQ2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTJkODk5MC1hNDA3LTk1NDctYTI0NC02Yjg0YTBlNDhjZjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZGY0YWRjYTUtODJmMy1hOTQ4LThlZGQtNjRhZWEwZjFiOTNkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9EYFmwAAANBJREFUeNpiZEADoqKiLkCqnAETvH/9+nUYuuD///8xFIqJiYH0u2Ax496rV6/SQQwWLJK4NFUwEAGAlgpCzRDEIp0OYzBh8S02S98D8SwG4kAaDktBvp2F1WIcQQwCncBgfk+Cb7GagcxhGgjfovuYbr6FW0xv3yL7mK6+BWcnoG+NcfgW7FpoaKCDs2gOwuVbkJp7QIdhmMGCQwMMrMIh7grEe4gIfpDZu7FJMDEMEBi1eNTiUYtHLR56FoPK6rPQspcUcBaNvxqLGF4AEGAAgyhF43Oqjh8AAAAASUVORK5CYII="
                                            alt=""
                                        />
                                        <p>
                                            Add rice and stir very gently to distribute. Top with
                                            artichokes and peppers, and cook without stirring, until
                                            most of the liquid is absorbed, 15 to 18 minutes. Reduce
                                            heat to medium-low, add reserved shrimp and mussels,
                                            tucking them down into the rice, and cook again without
                                            stirring, until mussels have opened and rice is just
                                            tender, 5 to 7 minutes more. (Discard any mussels that
                                            don’t open.
                                        </p>
                                        <h5>--Mahbub-Hasan</h5>
                                    </div>
                                    <div className="col-sm-3">
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://i.imgur.com/Xcnejze.jpg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide d-flex row m-10">
                        <div className="col">
                            <div className="card p-5">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAYAAADXYyzPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTM0QUIyOEU2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTM0QUIyOEQ2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTJkODk5MC1hNDA3LTk1NDctYTI0NC02Yjg0YTBlNDhjZjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZGY0YWRjYTUtODJmMy1hOTQ4LThlZGQtNjRhZWEwZjFiOTNkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9EYFmwAAANBJREFUeNpiZEADoqKiLkCqnAETvH/9+nUYuuD///8xFIqJiYH0u2Ax496rV6/SQQwWLJK4NFUwEAGAlgpCzRDEIp0OYzBh8S02S98D8SwG4kAaDktBvp2F1WIcQQwCncBgfk+Cb7GagcxhGgjfovuYbr6FW0xv3yL7mK6+BWcnoG+NcfgW7FpoaKCDs2gOwuVbkJp7QIdhmMGCQwMMrMIh7grEe4gIfpDZu7FJMDEMEBi1eNTiUYtHLR56FoPK6rPQspcUcBaNvxqLGF4AEGAAgyhF43Oqjh8AAAAASUVORK5CYII="
                                            alt=""
                                        />
                                        <p>
                                            Add rice and stir very gently to distribute. Top with
                                            artichokes and peppers, and cook without stirring, until
                                            most of the liquid is absorbed, 15 to 18 minutes. Reduce
                                            heat to medium-low, add reserved shrimp and mussels,
                                            tucking them down into the rice, and cook again without
                                            stirring, until mussels have opened and rice is just
                                            tender, 5 to 7 minutes more. (Discard any mussels that
                                            don’t open.
                                        </p>
                                        <h5>--Mahbub-Hasan</h5>
                                    </div>
                                    <div className="col-sm-3">
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://i.imgur.com/Xcnejze.jpg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide d-flex row m-10">
                        <div className="col">
                            <div className="card p-5">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAYAAADXYyzPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTM0QUIyOEU2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTM0QUIyOEQ2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTJkODk5MC1hNDA3LTk1NDctYTI0NC02Yjg0YTBlNDhjZjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZGY0YWRjYTUtODJmMy1hOTQ4LThlZGQtNjRhZWEwZjFiOTNkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9EYFmwAAANBJREFUeNpiZEADoqKiLkCqnAETvH/9+nUYuuD///8xFIqJiYH0u2Ax496rV6/SQQwWLJK4NFUwEAGAlgpCzRDEIp0OYzBh8S02S98D8SwG4kAaDktBvp2F1WIcQQwCncBgfk+Cb7GagcxhGgjfovuYbr6FW0xv3yL7mK6+BWcnoG+NcfgW7FpoaKCDs2gOwuVbkJp7QIdhmMGCQwMMrMIh7grEe4gIfpDZu7FJMDEMEBi1eNTiUYtHLR56FoPK6rPQspcUcBaNvxqLGF4AEGAAgyhF43Oqjh8AAAAASUVORK5CYII="
                                            alt=""
                                        />
                                        <p>
                                            Add rice and stir very gently to distribute. Top with
                                            artichokes and peppers, and cook without stirring, until
                                            most of the liquid is absorbed, 15 to 18 minutes. Reduce
                                            heat to medium-low, add reserved shrimp and mussels,
                                            tucking them down into the rice, and cook again without
                                            stirring, until mussels have opened and rice is just
                                            tender, 5 to 7 minutes more. (Discard any mussels that
                                            don’t open.
                                        </p>
                                        <h5>--Mahbub-Hasan</h5>
                                    </div>
                                    <div className="col-sm-3">
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://i.imgur.com/Xcnejze.jpg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide d-flex row m-10">
                        <div className="col">
                            <div className="card p-5">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAYAAADXYyzPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTM0QUIyOEU2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTM0QUIyOEQ2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTJkODk5MC1hNDA3LTk1NDctYTI0NC02Yjg0YTBlNDhjZjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZGY0YWRjYTUtODJmMy1hOTQ4LThlZGQtNjRhZWEwZjFiOTNkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9EYFmwAAANBJREFUeNpiZEADoqKiLkCqnAETvH/9+nUYuuD///8xFIqJiYH0u2Ax496rV6/SQQwWLJK4NFUwEAGAlgpCzRDEIp0OYzBh8S02S98D8SwG4kAaDktBvp2F1WIcQQwCncBgfk+Cb7GagcxhGgjfovuYbr6FW0xv3yL7mK6+BWcnoG+NcfgW7FpoaKCDs2gOwuVbkJp7QIdhmMGCQwMMrMIh7grEe4gIfpDZu7FJMDEMEBi1eNTiUYtHLR56FoPK6rPQspcUcBaNvxqLGF4AEGAAgyhF43Oqjh8AAAAASUVORK5CYII="
                                            alt=""
                                        />
                                        <p>
                                            Add rice and stir very gently to distribute. Top with
                                            artichokes and peppers, and cook without stirring, until
                                            most of the liquid is absorbed, 15 to 18 minutes. Reduce
                                            heat to medium-low, add reserved shrimp and mussels,
                                            tucking them down into the rice, and cook again without
                                            stirring, until mussels have opened and rice is just
                                            tender, 5 to 7 minutes more. (Discard any mussels that
                                            don’t open.
                                        </p>
                                        <h5>--Mahbub-Hasan</h5>
                                    </div>
                                    <div className="col-sm-3">
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://i.imgur.com/Xcnejze.jpg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide d-flex row m-10">
                        <div className="col">
                            <div className="card p-5">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAYAAADXYyzPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTM0QUIyOEU2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTM0QUIyOEQ2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTJkODk5MC1hNDA3LTk1NDctYTI0NC02Yjg0YTBlNDhjZjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZGY0YWRjYTUtODJmMy1hOTQ4LThlZGQtNjRhZWEwZjFiOTNkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9EYFmwAAANBJREFUeNpiZEADoqKiLkCqnAETvH/9+nUYuuD///8xFIqJiYH0u2Ax496rV6/SQQwWLJK4NFUwEAGAlgpCzRDEIp0OYzBh8S02S98D8SwG4kAaDktBvp2F1WIcQQwCncBgfk+Cb7GagcxhGgjfovuYbr6FW0xv3yL7mK6+BWcnoG+NcfgW7FpoaKCDs2gOwuVbkJp7QIdhmMGCQwMMrMIh7grEe4gIfpDZu7FJMDEMEBi1eNTiUYtHLR56FoPK6rPQspcUcBaNvxqLGF4AEGAAgyhF43Oqjh8AAAAASUVORK5CYII="
                                            alt=""
                                        />
                                        <p>
                                            Add rice and stir very gently to distribute. Top with
                                            artichokes and peppers, and cook without stirring, until
                                            most of the liquid is absorbed, 15 to 18 minutes. Reduce
                                            heat to medium-low, add reserved shrimp and mussels,
                                            tucking them down into the rice, and cook again without
                                            stirring, until mussels have opened and rice is just
                                            tender, 5 to 7 minutes more. (Discard any mussels that
                                            don’t open.
                                        </p>
                                        <h5>--Mahbub-Hasan</h5>
                                    </div>
                                    <div className="col-sm-3">
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://i.imgur.com/Xcnejze.jpg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide d-flex row m-10">
                        <div className="col">
                            <div className="card p-5">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAYAAADXYyzPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTM0QUIyOEU2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTM0QUIyOEQ2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTJkODk5MC1hNDA3LTk1NDctYTI0NC02Yjg0YTBlNDhjZjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZGY0YWRjYTUtODJmMy1hOTQ4LThlZGQtNjRhZWEwZjFiOTNkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9EYFmwAAANBJREFUeNpiZEADoqKiLkCqnAETvH/9+nUYuuD///8xFIqJiYH0u2Ax496rV6/SQQwWLJK4NFUwEAGAlgpCzRDEIp0OYzBh8S02S98D8SwG4kAaDktBvp2F1WIcQQwCncBgfk+Cb7GagcxhGgjfovuYbr6FW0xv3yL7mK6+BWcnoG+NcfgW7FpoaKCDs2gOwuVbkJp7QIdhmMGCQwMMrMIh7grEe4gIfpDZu7FJMDEMEBi1eNTiUYtHLR56FoPK6rPQspcUcBaNvxqLGF4AEGAAgyhF43Oqjh8AAAAASUVORK5CYII="
                                            alt=""
                                        />
                                        <p>
                                            Add rice and stir very gently to distribute. Top with
                                            artichokes and peppers, and cook without stirring, until
                                            most of the liquid is absorbed, 15 to 18 minutes. Reduce
                                            heat to medium-low, add reserved shrimp and mussels,
                                            tucking them down into the rice, and cook again without
                                            stirring, until mussels have opened and rice is just
                                            tender, 5 to 7 minutes more. (Discard any mussels that
                                            don’t open.
                                        </p>
                                        <h5>--Mahbub-Hasan</h5>
                                    </div>
                                    <div className="col-sm-3">
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://i.imgur.com/Xcnejze.jpg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    );
};

export default Review;
