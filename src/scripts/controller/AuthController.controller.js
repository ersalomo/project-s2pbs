import $ from 'jquery'


const AuthController = {
    init({element}){
        this._elementForm = element
    },
    login: () => {
        $(this._elementForm).on('submit',(e)=>{
            $.ajax({
            url: e.target.attr('action'),
            method: e.target.attr('method'),
            data: new FormData(e.target),
            contentType: 'json',
            processData: true,
            beforeSend: function(){
            },
            success: function(res){},
            error: function(res){},
           })
        })
    },
    register: () => {
    },
}

export default AuthController