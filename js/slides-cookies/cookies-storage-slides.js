const cookiesStorageSlides = [
  {
    title: "Emmagatzematge avançat de Sessions",
    content: `
      <h2 class="slide-title">Emmagatzematge avançat de Sessions</h2>
      <div class="text-large">
        <h4>📊 Opcions d'emmagatzematge:</h4>
        <div class="row mt-2">
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>💾 Fitxers</h4>
              <p><strong>Default de PHP</strong><br>
              Fàcil configuració<br>
              Lent per a moltes sessions<br>
              Problemes en clúster</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>🗄️ Base de dades</h4>
              <p><strong>MySQL, PostgreSQL</strong><br>
              Persistència<br>
              Escalabilitat mitjana<br>
              Requereix manteniment</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="generic-topic h-100">
              <h4>⚡ Memòria</h4>
              <p><strong>Redis, Memcached</strong><br>
              Molt ràpid<br>
              Escalable<br>
              Volàtil (si no es configura)</p>
            </div>
          </div>
        </div>
        
        <h4>🛠️ Implementació personalitzada:</h4>
        <div class="code-block mt-2">
          <div class="code-header">
            <span class="code-language">PHP</span>
            <button class="copy-btn" onclick="copyCode('custom-session-handler', this)">Copiar</button>
          </div>
          <pre><code id="custom-session-handler"><?php
class DatabaseSessionHandler implements SessionHandlerInterface
{
    private $pdo;
    private $table = 'sessions';
    
    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }
    
    public function open($savePath, $sessionName): bool
    {
        return true;
    }
    
    public function close(): bool
    {
        return true;
    }
    
    public function read($sessionId): string
    {
        $stmt = $this->pdo->prepare(
            "SELECT session_data FROM {$this->table} 
             WHERE session_id = :id AND expires_at > NOW()"
        );
        $stmt->execute([':id' => $sessionId]);
        $result = $stmt->fetchColumn();
        return $result ?: '';
    }
    
    public function write($sessionId, $sessionData): bool
    {
        $stmt = $this->pdo->prepare(
            "REPLACE INTO {$this->table} 
             (session_id, session_data, expires_at, last_accessed) 
             VALUES (:id, :data, DATE_ADD(NOW(), INTERVAL 30 MINUTE), NOW())"
        );
        return $stmt->execute([
            ':id' => $sessionId,
            ':data' => $sessionData
        ]);
    }
    
    public function destroy($sessionId): bool
    {
        $stmt = $this->pdo->prepare(
            "DELETE FROM {$this->table} WHERE session_id = :id"
        );
        return $stmt->execute([':id' => $sessionId]);
    }
    
    public function gc($maxLifetime): bool
    {
        $stmt = $this->pdo->prepare(
            "DELETE FROM {$this->table} WHERE expires_at < NOW()"
        );
        return $stmt->execute();
    }
}

// Utilitzar el gestor personalitzat
$pdo = new PDO('mysql:host=localhost;dbname=myapp', 'user', 'pass');
$handler = new DatabaseSessionHandler($pdo);
session_set_save_handler($handler, true);
session_start();</code></pre>
        </div>
      </div>
    `
  }
];