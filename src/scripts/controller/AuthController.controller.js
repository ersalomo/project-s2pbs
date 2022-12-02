import $ from 'jquery'

export default class AuthController {
    constructor({elementForm}){
        this._elementForm = elementForm
    }
    login(){
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
        
    }
}