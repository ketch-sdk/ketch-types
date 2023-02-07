/**
 * Pusher interface defines a type that has a push function like an array
 */
export interface Pusher {
  /**
   * Pushes the given arguments.
   *
   * @param args The arguments to push.
   */
  push(args: any[]): void
}

/**
 * Loaded interface defines a type that has a loaded boolean property
 */
export interface Loaded {
  /**
   * Loaded is set to true if the object has fully loaded
   */
  loaded: boolean
}

declare global {
  interface Window {
    /**
     * Semaphore is the action queue (should not be accessed directly except by legacy code
     * which should be migrated to the `ketch` function).
     */
    semaphore: Pusher & Loaded

    /**
     * Ketch is the main entrypoint to the JS API.
     *
     * @param action The action to invoke
     * @param args The arguments to the action
     */
    ketch(action: string, ...args: any[]): void
  }
}
