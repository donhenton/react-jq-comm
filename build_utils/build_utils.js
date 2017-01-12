/**
 * utilties for building js code
 */

module.exports

        = {
            
            props:
            {
                targetLocation: './target/',
                pageURL: 'http://127.0.0.1:8080'
                
            }
            ,
            
            
            
            notify: function (error) {
                var message = 'In: ';
                var title = 'Error: ';
                if (error.description) {
                    title += error.description;
                } else if (error.message) {
                    title += error.message;
                }

                if (error.filename) {
                    var file = error.filename.split('/');
                    message += file[file.length - 1];
                }

                if (error.lineNumber) {
                    message += '\nOn Line: ' + error.lineNumber;
                }
                console.log(error);
            }
        };