import io.socket.client.Socket
import kotlin.concurrent.thread

private lateinit var socket: Socket

fun main(args: Array<String>) {

    SocketHandler.setSocket()
    SocketHandler.establishConnection()

    val mSocket = SocketHandler.getSocket()

    var message = readlnOrNull()
    mSocket.emit("newMessage", message)

    thread {
        mSocket.on("newMessage") { args ->
            if (args[0] != null) {
                println("Serverdan bir mesaj: $args")
            }
            else
                println("(null)")
        }
    }
}